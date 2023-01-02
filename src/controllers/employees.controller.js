import { pool } from "../db.js";

export const getEmployee = async (req, res) => {

    try {

        const [rows] = await pool.query('SELECT * FROM employees')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({ message: "Error del servidor" })
    }
};

export const getEmployees = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employees WHERE id = ?', [req.params.id])
        console.log(rows)

        if (rows.length <= 0) {
            return res.status(404).json({ message: "Empleado no encontrado" })
        }
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message: "Error del servidor" })
    }
}

export const createEmployee = async (req, res) => {
    const { name, email, salary } = req.body
    try {
        const [rows] = await pool.query('INSERT INTO employees (name, email, salary) VALUES(?,?,?)', [name, email, salary])
        res.send({
            id: rows.insertId,
            name,
            email,
            salary
        });

        res.send("Creando empleados");
    } catch (error) {
        return res.status(500).json({ message: "Error del servidor" })
    }
};
export const updateEmployee = async (req, res) => {
    const { id } = req.params;
    const { name, email, salary } = req.body;
    try {

        const [result] = await pool.query('UPDATE employees SET name = IFNULL(?, name), email = IFNULL(?, email), salary = IFNULL(?, salary) WHERE id = ?', [name, email, salary, id])

        if (result.affectedRows <= 0) {
            return res.status(404).json({ message: "Empleado no encontrado" })
        }
        const [rows] = await pool.query('SELECT * FROM employees WHERE id = ?', [id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({ message: "Error del servidor" })
    }
};
export const deleteEmployee = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM employees WHERE id = ?', [req.params.id])
        if (result.affectedRows <= 0) {
            return res.status(404).json({ message: "Empleado no encontrado" })
        }
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: "Error del servidor" })
    }

};