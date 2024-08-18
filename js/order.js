"use strict";




const TOKEN ="7288114968:AAGyePb2TBBIvrtMj-YZpmXVrlg-1sLOq7Q";
const CHAT_ID ="958571684"; //958571684 5528810530
const URI_API =`https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const success =document.getElementById('btns');
document.getElementById('order').addEventListener('submit', function(e){
            e.preventDefault();
            // const formData = new FormData();
            // formData.append('chat_id',CHAT_ID);
            // formData.append('document',this.img.files[0])
           
            let message = `<b>Заявка з сайту!</b>\n`;
            message +=`<b>Куди: </b> ${window.location.pathname}\n`;
            message +=`<b>Замовник: </b> ${this.name.value}\n`;
            message +=`<b>Почта: </b> ${this.email.value}\n`;
            message +=`<b>телефон: </b> ${this.tel.value}\n`;
            message +=`<b>Дата(на коли замовлення): </b> ${this.data.value}\n`;
            message +=`<b>Кількість дітей: </b> ${this.amountkid.value}\n`;
            message +=`<b>Кількість дорослих: </b> ${this.amountold.value}\n`;
            message +=`<b>Звідки відправлення: </b> ${this.list.value}\n`;
            message +=`<b>Побажання: </b> ${this.message.value}\n`;
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
                this.tel.value ="";
                this.name.value ="";
                this.email.value ="";
				this.message.value ="";
                // this.img.value ="";
				success.innerHTML="Дякуємо за замовлення💚";
				success.style.display="block";
            })
            .catch((err)=>{
                console.warn(err);
            })
            .finally(()=>{
                console.log('finnaly');
            })
})
