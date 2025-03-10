// Príklad kódu pre filter v Node.js
app.get('/filmy', async (req, res) => {
    const { rokOd, rokDo, zaner, hodnotenieOd, hodnotenieDo } = req.query;

    let query = 'SELECT * FROM filmy WHERE 1=1';

    if (rokOd && rokDo) {
        query += ` AND rok_výroby BETWEEN ${rokOd} AND ${rokDo}`;
    }

    if (zaner) {
        query += ` AND žáner = '${zaner}'`;
    }

    if (hodnotenieOd && hodnotenieDo) {
        query += ` AND hodnotenie_csfd BETWEEN ${hodnotenieOd} AND ${hodnotenieDo}`;
    }

    const filmy = await db.query(query);
    res.json(filmy);
});