import React, { Component } from 'react';

let nextId = 0;

class Productos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      productos: [],
      editingProd: null,
      isEditing: false,
    };
  }

  editArtist = (artist) => {
    this.setState({
      editingProd: artist,
      name: artist.name,
      isEditing: true,
    });
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleAddOrUpdateArtist = () => {
    const { productos, editingProd, name, isEditing } = this.state;
    if (isEditing) {
      const updatedproductos = productos.map((artist) =>
        artist.id === editingProd.id
          ? { ...artist, name, purchased: editingProd.purchased } 
          : artist
      );
      this.setState({
        productos: updatedproductos,
        isEditing: false,
        name: '',
        editingProd: null,
      });
    } else {
      this.setState((prevState) => ({
        productos: [
          ...prevState.productos,
          { id: nextId++, name: prevState.name, purchased: false }, 
],
        name: '',
      }));
    }
  };

  handleDeleteArtist = (artistId) => {
    this.setState((prevState) => ({
      productos: prevState.productos.filter((artist) => artist.id !== artistId),
    }));
  };

  handleTogglePurchase = (artistId) => {
    this.setState((prevState) => ({
      productos: prevState.productos.map((artist) =>
        artist.id === artistId ? { ...artist, purchased: !artist.purchased } : artist
      ),
    }));
  };

  render() {
    const { name, productos, isEditing } = this.state;

    return (
      <header className='encabezado'>
        <h1>Escriba el producto de la canasta:</h1>
        <input value={name} onChange={this.handleNameChange} />
        <button onClick={this.handleAddOrUpdateArtist}>
          {isEditing ? 'Guardar' : 'Añadir'}
        </button>
        <ul>
          {productos.map((artist) => (
            <li key={artist.id}>
              {artist.name}{' '}
              <button onClick={() => this.editArtist(artist)}>Editar</button>
              <button onClick={() => this.handleDeleteArtist(artist.id)}>
                Eliminar
              </button>
              <br></br>
              <label>
                Comprado:
                <input
                  type="checkbox"
                  checked={artist.purchased}
                  onChange={() => this.handleTogglePurchase(artist.id)}
                />
              </label>
            </li>
          ))}
        </ul>
      </header>
    );
  }
}

export default Productos;