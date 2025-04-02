# Exam Results 2 Demo - Backend

## Exam Results 2 Demo

This project aims to demonstrate how fullstack applications can be built and deployed with ease using AWS Amplify Gen2.

The video demo below shows an Android app, built with Flutter, side by side with a Web app, built with Next.js. The Android app is used for data input and works only for authenticated users, while the Web app is open for guest or unauthenticated users. Because data schema is defined in the code, creating subscriptions for live-time event has never been easier: with one line of code, a filtered query will result in fast automatic data updates in the application.

I have made [a similar project](https://github.com/vg-cloud/210930unauthAmplify) using Amplify Gen1 several years ago. Amplify Gen2 has made the task of building fullstack applications much easier. In particular, the guest access is now configured by default. In addition, developers will like a code-first approach for the frontend completely in TypeScript. 

https://github.com/user-attachments/assets/e0e38442-82ba-4590-b180-5e42e53f517d


The Demo consists of three repositories:
- [Backend](https://github.com/vg-cloud/examres2): AWS backend made of Appsync (GraphQl API) with DynamoDB tables behind and authentication with Cognito (this repository). All the code which defines the backend services can be found in the 'amplify' folder.
- [Student App](https://github.com/vg-cloud/examres2_fe): Next.js/React frontend web application for guest or unauthenticated users. The app code can be found in the 'src' folder. The 'public' contains one image file. One line has been added to 'tsconfig.json' file. The content of other files is generated during installation of the app and the additional packages.
- [Teacher App](https://github.com/vg-cloud/examres2_teacher): Flutter frontend application for Teachers. The app code can be found in the 'lib/main.dart' file. Also, 'pubspec.yaml' file might have to be modified to install Amplify packages.

NB: The content of '.gitignore' has to be modified for the exclusion of 'amplify_outputs.*' file.

## The summary of the steps to build and deploy the backend.

### Create new app

Follow [manual installation](https://docs.amplify.aws/nextjs/start/manual-installation/) steps as per Amplify documentation to create the new backend. The defaults provided in 'auth/resource.ts' file can be used, while the 'data/resource.ts' file has been modified to support the Exam Results 2 Demo.

### Deploy the backend

1. Update the 'data/resource.ts' file.

2. Push the repository of the backend project to GitHub/GitLab/BitBucket.

3. Select Amplify service in the AWS Console and click on "Create new app" button, then add repository and branch. Use the default values to complete the creation process. Finally, the deployment of the backend will start. Make sure that the deployment is successful before starting the creation of the frontend applications.

