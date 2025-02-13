import postgres from 'postgres'

const sql = postgres('postgres://root:root@192.168.1.15:5432/database')

// const sql_expandido = postgres({
//     host                 : '192.168..15',
//     port                 : 5432,
//     database             : 'database',
//     username             : 'root',
//     password             : 'root',     
// })

export default sql;