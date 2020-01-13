// Firebase Config
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();


// Sendgrid Config
import * as sgMail from '@sendgrid/mail';

const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;
sgMail.setApiKey(API_KEY);


export const welcomeEmail = functions.auth.user().onCreate(user => {

    const msg = {
        to: user.email,
        from: 'cobaltkeepminis@gmail.com',
        templateId: TEMPLATE_ID,
        dynamic_template_data: {
            subject: 'Welcome to Cobalt Keep Miniatures!',
            name: user.displayName,
            message: user.email + '<br>' +"Thank you for joining our community, to get started on your next dream army please visit our user profile page when signed in to start the process!" + "<br>" +"<br> Thank you from all of us here!"+"<br>"+"The Cobalt Keep Miniatures team."
        },
        
    };

    return sgMail.send(msg);

});
export const genericEmail = functions.https.onCall(async (data, context) => {

    if (!context.auth || !context.auth.token.email) {
        throw new functions.https.HttpsError('failed-precondition', 'Must be logged with an email address');
    }
    
    const msg = {
        to: context.auth.token.email,
        from: 'cobaltkeepminis@gmail.com',
        templateId: TEMPLATE_ID,
        dynamic_template_data: {
            subject: data.subject,
            name: data.name,
            message: data.text,
            attachments: [
                {
                  content: data.attachments,
                  filename: `color scheme`,
                  type: 'image/.*',
                  disposition: 'attachment',
                  contentId: 'colorScheme'
                },
              ],
        },
       
    };

    await sgMail.send(msg);

    // Handle errors here

    // Response must be JSON serializable
    return { success: true };

});
export const toEmail = functions.https.onCall(async (data, context) => {

    if (!context.auth || !context.auth.token.email) {
        throw new functions.https.HttpsError('failed-precondition', 'Must be logged with an email address');
    }
    
    const msg = {
        to: 'cobaltkeepminis@gmail.com',
        from: context.auth.token.email,
        templateId: TEMPLATE_ID,
        dynamic_template_data: {
            subject: data.subject,
            name: data.text,
            message: data.text,
        },
    };

    await sgMail.send(msg);

    // Handle errors here

    // Response must be JSON serializable
    return { success: true };

});

