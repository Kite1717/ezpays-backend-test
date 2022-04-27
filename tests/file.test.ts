import FileController from '../src/controller/file';

import { Context } from 'koa';

import validContent from './mocks/valid.json';
import invalidContent from './mocks/invalid.json';
import invalidContent2 from './mocks/invalid2.json';

import { HResponse } from '../src/core/ApiResponse';

describe('File controller', () => {
  it('readJsonFile should return status 200 and return valid content.', async () => {
    const context = {
      status: undefined,
      body: undefined,
      file: { buffer: Buffer.from(JSON.stringify(validContent)) },
    } as unknown as Context;
    await FileController.readJsonFile(context);
    expect(context.status).toBe(200);
    expect(context.body).toStrictEqual(
      new HResponse(200, 'File content is valid.', {
        error: false,
        content: validContent,
      }),
    );
  });

  it('readJsonFile should return status 422 and return not valid content.', async () => {
    const context = {
      status: undefined,
      body: undefined,
      file: { buffer: Buffer.from(JSON.stringify(invalidContent)) },
    } as unknown as Context;
    await FileController.readJsonFile(context);
    expect(context.status).toBe(422);
    expect(context.body).toStrictEqual(
      new HResponse(422, "File content must be valid. Example content : {user: 'test',amount: 432}.", {
        error: true,
        content: invalidContent,
      }),
    );
  });

  it('readJsonFile should return status 422 and return not valid content.', async () => {
    const context = {
      status: undefined,
      body: undefined,
      file: { buffer: Buffer.from(JSON.stringify(invalidContent2)) },
    } as unknown as Context;
    await FileController.readJsonFile(context);
    expect(context.status).toBe(422);
    expect(context.body).toStrictEqual(
      new HResponse(422, "Content must be array.", {
        error: true,
        content: invalidContent2,
      }),
    );
  });
});
