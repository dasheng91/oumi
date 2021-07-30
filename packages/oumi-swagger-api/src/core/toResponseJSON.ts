import { verifyNodeIsDeclarationType } from '../utils';

/**
 * 模拟数据转response
 * @param data
 * @returns
 */
export default function toResponseJSON(resData: any) {
  const result = {};
  function each(res, data) {
    if (Array.isArray(data)) {
      data.forEach((value) => {
        console.log('数组的暂没有处理~');
      });
    } else if (data && typeof data === 'object') {
      Object.keys(data).forEach((key) => {
        const value = { ...data[key] };

        if (value.isArray) {
          delete value.isArray;
          const arrChild = {};
          each(arrChild, value);
          res[key] = [arrChild];
        } else if (verifyNodeIsDeclarationType(value)) {
          // 是一个正常的数据声明格式
          res[key] = transformDataResult(value);
        } else {
          if (Number(key) === 0) return; // 防止不识别的类型导致死循环
          res[key] = {};
          each(res[key], value);
        }
      });
    }
  }
  each(result, resData);
  return result;
}

function transformDataResult(data: any) {
  const { type, items, explame } = data;
  if (explame) return explame;
  const typeName = items && items.type ? items.type : type;
  if (type === 'array') {
    if (typeName === 'integer' || typeName === 'number') {
      return [1];
    }
    if (typeName === 'string') {
      return ['1'];
    }
  }
  if (type === 'integer' || type === 'number') {
    return 1;
  }
  if (type === 'string') {
    return 'string';
  }
  if (type === 'boolean') {
    return true;
  }
  return type;
}