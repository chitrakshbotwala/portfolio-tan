/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    {
        title : "Probing the high mixing efficiency events in a lock-exchange flow through simultaneous velocity and temperature measurements", 
        authors : "Tanmay Agrawal, Bhaarath Ramesh, Spencer J Zimmerman, Jimmy Philip, Joseph C Klewicki",
        conferences : "Physics of Fluids",
        researchYr : 2021,
        citebox : "popup1",
        image : "assets/images/research-page/research1.png",
        citation: {
            vancouver: "Agrawal T, Ramesh B, Zimmerman SJ, Philip J, Klewicki JC. Probing the high mixing efficiency events in a lock-exchange flow through simultaneous velocity and temperature measurements. Physics of Fluids. 2021 Jan 1;33(1):016605."
        },
        abstract: "Gravity currents produced by a lock-exchange flow are studied using high-resolution molecular tagging techniques. Instead of employing salt to produce density stratification, an initial temperature difference is introduced in the system to generate the ensuing gravity currents.",
        absbox: "absPopup1"
    },

    {
        title : "A parallel nonlinear multigrid solver for unsteady incompressible flow simulation on multi-GPU cluster",
        authors : "Xiaolei Shi, Tanmay Agrawal, Chao-An Lin, Feng-Nan Hwang, Tzu-Hsuan Chiu",
        conferences : "Journal of Computational Physics",
        researchYr : 2020,
        citebox : "popup2",
        image : "assets/images/research-page/36ac317f-0ee9-4ce6-aa9a-af405f67062f.jpg",
        citation: {
            vancouver: "Shi X, Agrawal T, Lin CA, Hwang FN, Chiu TH. A parallel nonlinear multigrid solver for unsteady incompressible flow simulation on multi-GPU cluster. Journal of Computational Physics. 2020 Aug 1;414:109447."
        },
        abstract: "A nonlinear multigrid solver for solutions of unsteady three-dimensional incompressible viscous flow working on multi-GPU cluster is developed. The solver consists of a full approximation scheme (FAS) V-cycle scheme to accelerate the computation, in which the artificial compressibility method based Navier-Stokes solver is used as a smoother.",
        absbox: "absPopup2"
    },

    {
        title : "Solar Absorption Refrigeration System for Air-Conditioning of a Classroom Building in Northern India",
        authors : "Tanmay Agrawal, Varun and Anoop Kumar",
        conferences : "Journal of The Institution of Engineers (India): Series C",
        researchYr :  2015,
        citebox : "popup3",
        image : "assets/images/research-page/ec588966-8186-4d7d-a19c-091c671cf6b1.jpg",
        citation: {
            vancouver: "Agrawal T, Kumar A. Solar Absorption Refrigeration System for Air-Conditioning of a Classroom Building in Northern India. Journal of The Institution of Engineers (India): Series C. 2015 Oct;96(4):389-96."
        },
        abstract: " Air-conditioning is a basic tool to provide human thermal comfort in a building space. The primary aim of the present work is to design an air-conditioning system based on vapour absorption cycle that utilizes a renewable energy source for its operation. The building under consideration is a classroom of dimensions 18.5 m × 13 m × 4.5 m located in Hamirpur district of Himachal Pradesh in India.",
        absbox: "absPopup3"
    },

    
];
AOS.init();   
const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, researchYr, citebox, citation, absbox, abstract}) =>
        (output +=`
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div> ${authors} </div> <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
        
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
        );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);

