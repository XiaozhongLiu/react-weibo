const messages = require('./message')

/**
 * message related helpers
 */
global.Message = key => messages.get(key)
global.MessageErr = (key, param) => {
    let { code, msg } = global.Message(key)
    if (param) {
        msg = msg.replace('@param', param)
    }
    const err = new Error(msg)
    err.code = code
    return err
}
global.ExtractErr = body => {
    const err = new Error(body.msg)
    err.code = body.code
    return err
}