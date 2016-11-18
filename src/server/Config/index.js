/**
 * Класс настроек приложения.
 * 
 * @class Config
 */
class Config
{
    /**
     * Получить номер порта приложения.
     * 
     * @readonly
     * 
     *  @type {number}
     */
    get port() {
        return 8011;
    };

    /**
     * Получить имя приложения.
     * 
     * @readonly
     *
     *  @type {string}
     */
    get name() {
        return 'JSBlog';
    };
    
    /**
     * Признак отладки.
     * 
     * @type {boolean}
     */
    get debug() {
        return this._debug || false;
    };
    set debug(value) {
        this._debug = value;
    }
}
module.exports = new Config();