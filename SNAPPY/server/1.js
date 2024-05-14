const productdata = {

}

MongoClient.connect('url',(err, client)=>{
    if(err){
        console.error("Failed to connect");
        return;
    }
    const db = client.db(dbname);
    const collection = db.collection("products");

    // collection.insertOne(productdata, (err, result)=> {
    //     if(err){
    //         console.error(err);
    //     }
    //     else{
    //         console.log("Inserted")
    //     }
    // })

    const filter = {category  : "electric cars"};
    collection.find(filter).toArray((err, documents)=> {
        if(err){
            console.error(err)
        }
        else{
            console.log("Filtered data");
            console.log(documents);
        }
    })
    client.close();
})