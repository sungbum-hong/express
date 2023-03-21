const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://mkonji2030:Qja58246!!@sungbeom.nxpzqve.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

client.connect((err) => {
  const member = client.db('kdt5').collection('member');

  member.deleteMany({}, (deleteManyErr, deleteManyResult) => {
    if (deleteManyErr) throw deleteManyErr;
    console.log(deleteManyResult);
  });

  member.insertMany(
    [
      { name: '슬기', age: 30 },
      { name: '성범', age: 32 },
      { name: '호준', age: 29 },
      { name: '상아', age: 32 },
    ],
    (insertManyErr, insertResult) => {
      if (insertManyErr) throw insertManyErr;
      console.log(insertResult);

      member.insertOne(
        { name: '홍성범', age: 32 },
        (insertOneErr, insertOneResult) => {
          if (insertOneErr) throw insertOneErr;

          member.deleteOne(
            { name: '상아' },
            (deleteOneErr, deleteOneResult) => {
              if (deleteOneErr) throw deleteOneErr;

              member.updateOne(
                { name: '성범' },
                { $set: { name: '호준', age: 24 } },
                (updateOneErr, updateOneResult) => {
                  if (updateOneErr) throw updateOneErr;

                  const oldCursor = member.find({ age: { $gte: 25 } });

                  oldCursor.toArray((toArrErr, toArrData) => {
                    if (toArrErr) throw toArrErr;
                    console.log(toArrData);
                  });
                }
              );
            }
          );
        }
      );
    }
  );
});
