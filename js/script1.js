//



// contole fenetre modale
document.getElementById('button').style.display = "flex";
document.getElementById('button').addEventListener("click", function() {
   document.querySelector('.bg-modal').style.display = "flex";
   document.getElementById('button').style.display = "none";
});

document.querySelector('.close').addEventListener("click", function() {
   document.querySelector('.bg-modal').style.display = "none";
   document.getElementById('button').style.display = "flex";
});

// controle les formes

// const form = document.getElementById('form')
// const nome = document.getElementById('NOM');
// const prenom = document.getElementById('PRENOM');
// const tel = document.getElementById('email');
// const email = document.getElementById('tel');

function surligne(champ, erreur)
{
   if(erreur)
      champ.style.borderColor = "red";
}

function verifPseudo(champ)
{
   if(champ.value.length < 4 )
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifForm(f)
{
   var nom = verifPseudo(f.NOM);
   var prenom = verifPseudo(f.PRENOM);
   var mail = verifPseudo(f.email);
   var tel = verifPseudo(f.tel);
   
   if(nom && prenom && mail && tel)
      return true;
   else
   {  
    return false;
   }
}




