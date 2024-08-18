"use strict";




const TOKEN ="7288114968:AAGyePb2TBBIvrtMj-YZpmXVrlg-1sLOq7Q";
const CHAT_ID ="958571684"; //958571684 5528810530
const URI_API =`https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const success =document.getElementById('success');
document.getElementById('tg').addEventListener('submit', function(e){
            e.preventDefault();


            // const formData = new FormData();
            // formData.append('chat_id',CHAT_ID);
            // formData.append('document',this.img.files[0])

            let message = `<b>Заявка з сайту!</b>\n`;
            message +=`<b>Відправник: </b> ${this.name.value}\n`;
            message +=`<b>почта: </b> ${this.email.value}\n`;
            message +=`<b>повідомлення: </b> ${this.message.value}\n`;
            // message +=`<b>Фото: </b> ${this.img.files}\n`;
            axios.post(URI_API,{
                // headers:{
                //     'Content-Type':'multipart/form-data'
                // },
                chat_id : CHAT_ID,
                parse_mode:'html',
                text:message
            })
            .then((res) =>{
                this.name.value ="";
                this.email.value ="";
				this.message.value ="";
                // this.img.value ="";
				success.innerHTML="Дякую за Коментар💚";
				success.style.display="block";
            })
            .catch((err)=>{
                console.warn(err);
            })
            .finally(()=>{
                console.log('finnaly');
            })
})
document.getElementById('phone-send').addEventListener('submit', function(e){
            e.preventDefault();

            let message = `<b>Заявка з сайту!</b>\n`;
            message +=`<b>телефон: </b> ${this.tel.value}\n`;
            axios.post(URI_API,{
                chat_id : CHAT_ID,
                parse_mode:'html',
                text:message
            })
            .then((res) =>{
                this.tel.value ="";
            })
            .catch((err)=>{
                console.warn(err);
            })
            .finally(()=>{
                console.log('finnaly');
            })
})
