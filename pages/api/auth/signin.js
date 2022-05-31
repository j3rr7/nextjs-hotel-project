// ToDo: Add Validation and Data Fetching

export default function handler(req, res) {

  if (req.method === 'GET') {
    return res.status(405).end();
  }

  // get data from body
  const {employee_id, password, remember_me} = req.body;

  // check if data is valid
  if (!employee_id && !password) {
    return res.status(400).json({
      success: false,
      message: 'Employee ID and Password are required',
    });
  }

  if (remember_me) {
    // ToDo: Set Session or Cookie
  }

  res.status(200).json({
    success: true,
    data: {
      // ToDo: Add Data Fetching
      employee_id: '12345',
      key: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      expired_at: '2020-01-01T00:00:00.000Z',
    },
  });
}
