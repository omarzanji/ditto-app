// const ip = '192.168.0.105'
const ip = 'localhost'

/**
 * Function for interacting with Ditto's database.
 */
 export const fetchDatabase = async (fetchMethod, APIRequest, params={}, timeout=1000) => {
    // setup timeout 
    const controller = new AbortController()
    const id = setTimeout(() => controller.abort(), timeout)
    const isEmpty = Object.keys(params).length === 0;
    if (isEmpty) {
      try {
        const timeout = 1000
        const fetchLink = `http://${ip}:42032/${APIRequest}`
        console.log('[API Request] ' + fetchLink)
        const fetchResponse = await fetch(fetchLink, { 
          method: fetchMethod,
          signal: controller.signal
        });
        clearTimeout(id);
        const responseJson = await fetchResponse.json(); 
        return responseJson;
      } catch (e) {
        console.log(e);
        return undefined;
      }
    } else {
      var parameters;
      parameters = Object.keys(params);
      const key = parameters[0];
      try {
        const fetchLink = `http://${ip}:42032/${APIRequest}/?${parameters[0]}=${params[key]}`;
        console.log('[API Request] ' + fetchLink);
        const fetchResponse = await fetch(fetchLink, { 
          method: fetchMethod, 
          signal: controller.signal
        });
        clearTimeout(id);
        const responseJson = await fetchResponse.json(); // Promise (use await)
        return responseJson;
      } catch (e) {
        console.log(e);
        return undefined;
      }
    }
}

/**
 * Grabs prompts and responses from the Ditto SQLite3 database.
 * @returns 
 */
 export const grabConversationHistory = async() => {
    try {
        var history = await fetchDatabase('GET', 'ditto', {"history": "1"});
        return history;
    } catch(e) {
        console.error(e);
    }
  }