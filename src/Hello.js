/** Class representing a Hello. */
class Hello {
    /**
    * Create a Hello.
    * @constructor
    * @param {messagem} msg - The message.
    */
    constructor(msg = "World") {
        this.msg = msg;
    }

    /**
     * Display de message
     * @return {string} The message.
     */
    toString() {
        return "Hello " + this.msg;
    }
}

export default Hello;