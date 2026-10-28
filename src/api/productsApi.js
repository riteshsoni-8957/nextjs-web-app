import pool from "../_lib/db";
// import { NextResponse } from "next/server";

export const getProducts = async () => {
    try {
        const result = await pool.query(
            "SELECT * FROM products ORDER BY id"
        );

        return result.rows;
    } catch (error) {
        console.log("get products error: ", error);
        throw error;
    }
};
