const notFound = (req, res) => {
    return res.json({message: "Not found"}).status(500)
}

module.exports = notFound