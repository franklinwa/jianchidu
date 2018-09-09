
import 'bootstrap/dist/js/bootstrap.js';
import  { jcD } from'./jcd.js';


// $(document).ready(function () {
    $('button').click(() => {
        let contentStr = [];
        console.log("test");
        let str = $('#content').val();
        $('#content').val(jcD.clearBlankRow(str));

        contentStr = jcD.clearBlankRow(str).split(/[\n]/);
        contentStr.map((item,key)=>{
            console.log(`key${key}:${item}`);
            
        })
        // console.log($('#content').val());
        // console.log(contentStr);
    });
// });

