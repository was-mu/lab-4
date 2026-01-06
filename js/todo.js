window.onload = function(){ 
    document.querySelector('#push').onclick = function(){
        if(document.querySelector('#newtask input').value.length == 0){
            alert("Kindly Enter Task Name!!!!")
        }

        else{
            document.querySelector('#tasks').innerHTML += `
                <div class="task">
                    <span id="taskname">
                        ${document.querySelector('#newtask input').value}
                    </span>
                    <button class="delete">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
<linearGradient id="_Ju8QmaPiLgORyCZvbmoIa_CzTISLkmHrKE_gr1" x1="3.732" x2="20.268" y1="3.439" y2="19.975" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity=".6"></stop><stop offset="1" stop-color="#fff" stop-opacity=".3"></stop></linearGradient><path fill="url(#_Ju8QmaPiLgORyCZvbmoIa_CzTISLkmHrKE_gr1)" d="M21,5c0-1.105-0.895-2-2-2c-0.174,0-1.373,0-3,0c0-0.552-0.448-1-1-1H9C8.448,2,8,2.448,8,3 C6.373,3,5.174,3,5,3C3.895,3,3,3.895,3,5c0,0.738,0.405,1.376,1,1.723V19c0,1.657,1.343,3,3,3h10c1.657,0,3-1.343,3-3V6.723 C20.595,6.376,21,5.738,21,5z"></path><linearGradient id="_Ju8QmaPiLgORyCZvbmoIb_CzTISLkmHrKE_gr2" x1="3.732" x2="20.268" y1="3.439" y2="19.975" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity=".6"></stop><stop offset=".493" stop-color="#fff" stop-opacity="0"></stop><stop offset=".997" stop-color="#fff" stop-opacity=".3"></stop></linearGradient><path fill="url(#_Ju8QmaPiLgORyCZvbmoIb_CzTISLkmHrKE_gr2)" d="M15,2.5c0.276,0,0.5,0.224,0.5,0.5v0.5H16 h3c0.827,0,1.5,0.673,1.5,1.5c0,0.534-0.281,1.017-0.751,1.29L19.5,6.435v0.288V19c0,1.379-1.122,2.5-2.5,2.5H7 c-1.379,0-2.5-1.121-2.5-2.5V6.723V6.435L4.252,6.29C3.781,6.017,3.5,5.534,3.5,5c0-0.827,0.673-1.5,1.5-1.5h3h0.5V3 c0-0.276,0.224-0.5,0.5-0.5H15 M15,2H9C8.448,2,8,2.448,8,3C6.373,3,5.174,3,5,3C3.895,3,3,3.895,3,5c0,0.738,0.405,1.376,1,1.723 V19c0,1.657,1.343,3,3,3h10c1.657,0,3-1.343,3-3V6.723C20.595,6.376,21,5.738,21,5c0-1.105-0.895-2-2-2c-0.174,0-1.373,0-3,0 C16,2.448,15.552,2,15,2L15,2z"></path><linearGradient id="_Ju8QmaPiLgORyCZvbmoIc_CzTISLkmHrKE_gr3" x1="7.086" x2="16.914" y1=".086" y2="9.914" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity=".7"></stop><stop offset=".519" stop-color="#fff" stop-opacity=".45"></stop><stop offset="1" stop-color="#fff" stop-opacity=".55"></stop></linearGradient><path fill="url(#_Ju8QmaPiLgORyCZvbmoIc_CzTISLkmHrKE_gr3)" d="M19,3c-0.174,0-1.373,0-3,0	c0-0.552-0.448-1-1-1H9C8.448,2,8,2.448,8,3C6.373,3,5.174,3,5,3C3.895,3,3,3.895,3,5c0,1.105,0.895,2,2,2c0.601,0,13.399,0,14,0	c1.105,0,2-0.895,2-2C21,3.895,20.105,3,19,3z"></path>
</svg>
                    </button>
                </div>
            `;

            var current_tasks = document.querySelectorAll(".delete");
            for(var i=0; i<current_tasks.length; i++){
                current_tasks[i].onclick = function(){
                    this.parentNode.remove();
                }
            }
        }
    }
}