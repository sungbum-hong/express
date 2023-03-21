const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://mkonji2030:Qja58246!!@sungbeom.nxpzqve.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function main() {
  try {
    await client.connect();
    const member = client.db('kdt5').collection('member');
    await member.deleteMany({});
    await member.insertMany([
      { name: '슬기', age: 30 },
      { name: '성범', age: 32 },
      { name: '호준', age: 29 },
      { name: '상아', age: 32 },
    ]);
    await member.insertOne({ name: '이효석', age: 39 });
    await member.deleteOne({ name: '상아' });
    await member.updateOne(
      { name: '이효석' },
      { $set: { name: '상아', age: 24 } }
    );
    const findCursor = member.find({ age: { $gte: 25 } });
    const dataArr = await findCursor.toArray();
    console.log(dataArr);
  } catch (err) {
    console.error(err);
  }
}

main();
