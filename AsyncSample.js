async function fetchData()
{
    console.log("Data is fetching")
}
async function runTask()
{
    console.log("Processing")
    await fetchData()
    console.log("Stop")
}
runTask()