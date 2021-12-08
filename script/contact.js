function ValiderMail(formulaire) {
  if (formulaire.mail.value.indexOf("@",0)<0) {alert("Adresse mail saisie invalide.\nLe formulaire ne sera pas validé.")}
  else {
     alert("Merci pour votre message.\nNous vous répondrons dans les plus brefs délais.");
  }}