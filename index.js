const fs =  require('fs');

const package = {

  write: function (file , content){
      
      fs.writeFile( file , content ,  (error)=>{
        if (error) {
            console.log(error);
        }else{
            console.log("file created");
        }
    })
  } ,

     read: function (file){

        fs.readFile(file , (error , data)=>{
            if (error) {
                console.log(error);
            }else{
                console.log(data.toString());
            }
        })
     },

    rename: function (file , newfile ){

        fs.rename( file , newfile , (error)=>{
            if (error) {
                console.log(error);
            }else{
                console.log("file renaming success");
            }
        })
    },

    delete: function (file){

        fs.unlink(file , (error)=>{
            if (error) {
                console.log(error);
            }else{
                console.log("The file was deleted successfully");
            }
        })
    },

    append: function (file , content){

        fs.appendFile(file, content , (error)=>{
            if (error) {
                console.log("The file was not created");
            }else{
                console.log("Data appended  successfuly");
            }
        })
    }

}

module.exports = package;