/* eslint-disable no-param-reassign */
import channels from './channels';
import fs from 'fs';
import path from 'path';
import modelDb from '../model/db';
import type { SocketContext } from '../typings/index';

let cwd = process.cwd();

function normalize(value) {
  if (value.length === 1) return value;
  const lastChar = value.charAt(value.length - 1);
  if (lastChar === path.sep) {
    value = value.substr(0, value.length - 1);
  }
  return value;
}

export default {
  get: () => {
    const current = modelDb.projectList.findCurrent();
    return (current && current.path) || cwd;
  },
  set: (value: string, context: SocketContext) => {
    value = normalize(value);
    if (!fs.existsSync(value)) return;
    cwd = value;
    process.env.OUMI_CLI_CONTEXT = value;
    context.pubsub.publish(channels.CWD_CHANGED, { cwdChanged: value });
    try {
      process.chdir(value);
    } catch (err) {
      console.error(err);
    }
  }
};
