
function index(req, res) {
  // ...
  return res.status(200).json({ payments: []})
}

function create(req, res) {
  // ...
  return res.status(201).json({ payment: { ...req.body }})
}

export { index, create }
