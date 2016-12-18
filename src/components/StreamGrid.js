import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import CircularProgress from 'material-ui/CircularProgress';
import firebase from 'firebase';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: "100%",
    height: "100%",
    overflowY: 'auto',
  },
};

// const tilesData = [
//   {
//     img: '/streams/assets/sky.jpg',
//     title: 'I <3 Men',
//     author: 'Solstis',
//   }, {
//     img: '/streams/assets/sky.jpg',
//     title: 'Happy Raver Mix',
//     author: 'it me',
//   }, {
//     img: '/streams/assets/sky.jpg',
//     title: 'I just n e e d death',
//     author: 'kia sorento',
//   }, {
//     img: '/streams/assets/sky.jpg',
//     title: 'Industrial Bieber',
//     author: 'Kleen Pockts',
//   }, {
// img: '/streams/assets/sky.jpg',
// title: 'Walt Disney Is Dead',
// author: 'Killinois',
//   }
// ];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
class StreamGrid extends React.Component {

  constructor(props) {
    super(props)
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {
      tilesData: []
    }
  }

  componentDidMount() {
    var streamsRef = firebase.database().ref('/streams/');
    streamsRef.on('value', (snapshot) => {
      console.log(snapshot);
      console.log(snapshot.val());
      var tilesData = [];

      snapshot.forEach((item) => {
        tilesData.push(item.val());
      });
      if (!tilesData) {
        tilesData = [];
      }
      console.log(tilesData);
      this.setState({
        tilesData: tilesData
      });
    })
  }

  componentDidUpdate() {
    // FB.XFBML.parse(this.refs.rootGrid);
  }

  render() {
    var tiles = this.state.tilesData.map((tile) => (
          <GridTile
            style={styles.gridTile}
            key={tile.title}
            title={tile.title}
            subtitle={<span>by <b>{tile.author}</b></span>}
            >
            <div
              className="fb-video"
              data-href={tile.url}
              data-width="500"
              data-allowfullscreen="true"
              data-autoplay="false"></div>
          </GridTile>
        ))
     var toRender; 
     if(this.state.tilesData.length > 0) {
       toRender = tiles;
     }  else {
       toRender = <CircularProgress />
     }
    return (
      <div ref="rootGrid" style={styles.root}>
          {toRender}
      </div>
    )
  }
}


export default StreamGrid;

  // <GridList
        //   cellHeight={200}
        //   cols={4}
        //   padding={15}
        //   style={styles.gridList}
        //   >
        //   {this.state.tilesData.map((tile) => (
        //     <GridTile
        //       style={styles.gridTile}
        //       key={tile.title}
        //       title={tile.title}
        //       subtitle={<span>by <b>{tile.author}</b></span>}
        //       >
        //       <div
        //         className="fb-video"
        //         data-href="https://www.facebook.com/lemiesz/videos/10152899314242153/"
        //         data-width="200"
        //         data-allowfullscreen="true"></div>

        //     </GridTile>
        //   ))}
        // </GridList>