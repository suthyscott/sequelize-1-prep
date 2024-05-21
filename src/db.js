import { Sequelize } from "sequelize";

const connectToDB = async (dbURI) => {
    console.log(`Connecting to DB: ${dbURI}`)

    const sequelize = new Sequelize(dbURI, {
        logging: console.log,
        define: {
            timestamps: false,
            underscored: true,
        },
        password: "admin"
        // students may need this
    })

    try {
        await sequelize.authenticate();
        console.log('Connected to DB successfully!')
    } catch(error) {
        console.error('Unable to connect to DB:', error)
    }

    return sequelize
}


export default connectToDB