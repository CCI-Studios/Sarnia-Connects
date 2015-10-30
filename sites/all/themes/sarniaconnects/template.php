
<?php 
function sarniaconnects_form_alter(&$form, &$form_state, $form_id) {
   if ($form_id == 'webform_client_form_4'){
  	   	$form['submitted']['email']['newsletter_email_address']['#attributes'] = array('placeholder' => t('Email Address'));
   		$form['submit']['#attributes'] = array('value' => 'Submit');
  	 
   }
}
?>