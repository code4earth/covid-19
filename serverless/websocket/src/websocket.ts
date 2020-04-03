export const connect = async function connect() {
  return {
    body: JSON.stringify({ foo: 'bar' }),
    statusCode: 200,
  }
}

export const disconnect = async function disconnect() {
  return {
    body: JSON.stringify({ foo: 'bar' }),
    statusCode: 200,
  }
}

export default async function _default() {
  return {
    body: JSON.stringify({ foo: 'bar' }),
    statusCode: 200,
  }
}
