var bunyan = require('bunyan');
var configuration = require('../Config');
var express = require('express');
var middlewares = require('../middlewares');
var app = express();


/**
 * Класс приложения.
 *
 * @class App
 */
class App
{
   
   /**
    * Конструктор класса.
    */
   constructor() {
        this.init();
   }

   /**
    * Инициализация приложения.
    * 
    * @private
    */
   init() {
    this._config = configuration;
    this.initDebug();
    this._log = this.getLogger();
    this.initMiddlewares();
   }

   /**
    * Получить логгер. 
    * 
    * @readonly
    */
    get log()
    {        
        return this._log;
    }
    
   /**
    * Получить конфигурацию приложения. 
    * 
    * @readonly
    */
    get config()
    {        
        return this._config;
    }

  
   /**
    * Инициализация отладки.
    * 
    * @private
    */
   initDebug()
   {
        let ind = 0;
        while ((ind < process.argv.length) && (process.argv[ind] != "dev")) {
            ind++;
        }
        this._config.debug = ind < process.argv.length;
   }

   /**
    * Получение логгера.
    * 
    * @private
    */
   getLogger()
   {
        return bunyan.createLogger({
            name: this._config.name,
            src: this._config.debug,
            level: 'trace'});
   }

  /**
   * Инициализация мидлвар.
    * 
    * @private
   */
   initMiddlewares()
   {
       app.use(middlewares(this));
   }

    /**
     * Запуск приложения.
     * 
     * @param {Router} router - Роутер express.
     * 
     */
    run(router) {
        app.use('/', router);
        app.listen(this._config.port, () => {
        this.log.info(`${this._config.name} on port ${this._config.port} started`);
      });
    }
}
module.exports = new App();