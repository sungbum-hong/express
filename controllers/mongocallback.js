const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://mkonji2030:Qja58246!!@sungbeom.nxpzqve.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

//// insertOne ////

client.connect((err) => {
  const test = client.db('kdt5').collection('test');

  test.deleteMany({}, (deleteErr, deleteResult) => {
    if (deleteErr) throw deleteErr;
    console.log(deleteResult);

    test.insertOne(
      {
        name: 'pororo',
        age: 5,
      },
      (insertErr, insertResult) => {
        if (insertErr) throw insertErr;
        console.log(insertResult);
      }
    );
  });
});

//// insertMany ////

// client.connect((err) => {
//   const test = client.db('kdt5').collection('test');

//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);

//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 3 },
//         { name: 'crong', age: 2 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);
//       }
//     );
//   });
// });

////  DeleteOne 쿼리 ////
// client.connect((err) => {
//   const test = client.db('kdt5').collection('test');

//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);

//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 2 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);

//         test.deleteMany(
//           { age: { $gte: 5 } },
//           (deleteManyErr, deleteManyResult) => {
//             if (deleteManyErr) throw deleteManyErr;
//             console.log(deleteManyResult);
//           }
//         );
//         // client.close();
//       }
//     );
//   });
// });

//// Update 쿼리 ////
// client.connect((err) => {
//   const test = client.db('kdt5').collection('test');

//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);

//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 2 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);

//         test.updateMany(
//           { age: { $gte: 5 } },
//           { $set: { name: '5상 이상인 친구들' } },
//           (updateErr, updateResult) => {
//             if (updateErr) throw (updateErr, console.log(updateResult));
//           }
//         );
//         // client.close();
//       }
//     );
//   });
// });

// Find 쿼리 //
// client.connect((err) => {
//   const test = client.db('kdt5').collection('test');

//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);

//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 2 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);

//         const findCursor = test.find({});
//         console.log(findCursor);
//         findCursor.toArray((toArrErr, toArrData) => {
//           if (toArrErr) throw toArrErr;
//           console.log(toArrData);
//         });
//         // client.close();
//       }
//     );
//   });
// });
