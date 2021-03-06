# Node 03 bases
 + Clase 04 
    * instalación de npm y package.json
    * se instala nodemon (npm install --save-dev nodemon)
    * se agrega archivo .gitignore y se agrega los nombres de la carpeta node_modules y el archivo package-lock.json
      ya que al clonarlo en otra pc se descarga las dependencias que hay en el package.json. Para descargar las dependecias
      se una el comando 'npm install'.
    * se agrega en el script, "dev" y "start". Se corre en consola con los comandos : npm run dev / npm run start.

    * también se usa comandos: npx nodemon - node index - 
    
    * se agrega filesystem al : fs
      se usa writeFileSync para crear archivo txt con la información del script. 
    * se crea carpeta multiplicador para modularizar el proyecto.
    
    * exportamos archivos.
    
    * dentro de la carpeta multiplicador se agrega los archivos index.js y logica.js
    * pag Yargs https://www.npmjs.com/package/yargs 
    
    * se instala yargs : npm i yargs --save
    * yargs es una librería para generar comandos.
    
    * se agrega dependencia npm install color

    * .option : es para dar valor al comando al ejecutarlo, en este caso 'b'. Se ejecuta comando "node index -b 'numero'" ó " node index --base 'numero' ".
    *  comandos : 
          * node index --help
          * node index --base 'numero'
          * node index -b 'numero'
          * node index --base 9 --limite 15
          *  node index --base 9 --limite 15 -v
    * se instala 'npm install colors' : https://www.npmjs.com/package/colors
          * se usa para darle color al texto.

