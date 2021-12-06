const styles = {
    carroContenedor: {
        position: 'relative'
    },
    carro: {
        backgroundColor: '#118002',
        border: 'none',
        borderRadius: 5,
        color: '#fff',
        padding: '10px 15px',
        cursor: 'pointer'
    },
    listaArticulos: {
        borderRadius: 5,
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.4)',
        backgroundColor: '#fff',
        color: '#000',
        padding: 10,
        position: 'absolute',
        right: 0,
        top: 50,
        width: 400,
    },
    ul: {
        listStyleType: 'none',
        margin: 0,
        padding: 0
    },
    li: {
        alignItems: 'center',
        borderBottom: '1px dashed #ccc',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingBottom: 5
    },
    deleteButton: {
        border: 'none',
        backgroundColor: '#fb0207',
        borderRadius: '50%',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '0.6em',
        padding: '2px 5px',
    }

}

export default styles