import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Exam: a
    .model({
      id: a.id().required(),
      subject: a.string(),
      date: a.datetime(),
      teacherName: a.string(),
      results: a.hasMany('Result', 'examId')
    })
    .authorization((allow) => [allow.guest().to(['read']), allow.authenticated()]),
  
  Result: a
    .model({
      id: a.id().required(),
      studentName: a.string(),
      grade: a.integer(),
      examId: a.id(),
      exam: a.belongsTo('Exam', 'examId')
    })
    .authorization((allow) => [allow.guest().to(['read']), allow.authenticated()])
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'iam',
  },
});
