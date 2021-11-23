import path from 'path';
import fs from 'fs';
import Swagger from '@oumi/swagger-api';
import { transformPath } from '@oumi/swagger-api/lib/utils';
import { requestTemp, namespaceTempHead, namespaceTempFoot } from '@oumi/swagger-api/lib/template';
import { request } from '@oumi/cli-shared-utils';
import type { Context } from '../../typings';

const exportMock = async (ctx: Context) => {
  const { id, searchPath }: any = ctx.request.query;

  const data = await ctx.model.userConfig.swagger.findById(id);
  const swaggerData: any = await request.getJSON(data.href);
  const swagger = new Swagger(swaggerData);

  swagger.query({ path: searchPath }).toResponseJSON((res) => {
    const key = Object.keys(res);

    if (key.length === 0) {
      ctx.body = '无效的mock数据';
      return;
    }
    const trans = transformPath(key[0], 'api');
    const json = res[key[0]];

    ctx.set('Content-Type', 'application/json-my-attachment');
    ctx.set('content-disposition', `attachment; filename="${trans.key}.json"`);
    ctx.body = JSON.stringify(json, null, '\t');
  });
};

const exportTSFile = async (ctx: Context) => {
  const { id, searchPath }: any = ctx.request.query;

  const data = await ctx.model.userConfig.swagger.findById(id);
  const swaggerData: any = await request.getJSON(data.href);
  const swagger = new Swagger(swaggerData);
  const fileType = 'ts';
  let mergeTemp = '';

  // 多个文件合并输出，需要标注命名空间
  const mergeOutput = (json: any) => {
    Object.keys(json).forEach((filePath) => {
      const { propsString, resultString, methods } = json[filePath];
      const pathData = transformPath(filePath, 'api');
      const requestContent = requestTemp({
        method: methods,
        url: `/${pathData.path}`,
        fileType,
        namespace: pathData.key
      });

      mergeTemp += [namespaceTempHead(pathData.key), propsString, resultString, namespaceTempFoot, requestContent].join('\n');
    });
  };

  swagger
    .query({ path: searchPath })
    .toTypeScript()
    .toInterfaceTemp((res) => {
      const key = Object.keys(res);

      if (key.length === 0) {
        ctx.body = '无效的mock数据';
        return;
      }

      const trans = transformPath(key[0], 'api');
      mergeOutput(res);

      ctx.set('Content-Type', 'application/json-my-attachment');
      ctx.set('content-disposition', `attachment; filename="${trans.key}.ts"`);
      ctx.body = `import request from '@/api/request'; \n ${mergeTemp}`;
    });
};

export default {
  'GET /api/export/mock': exportMock,
  'GET /api/export/typescript': exportTSFile
};