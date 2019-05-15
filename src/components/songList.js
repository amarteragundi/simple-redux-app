import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div key={song.title} className="item">
          <div className="right floated content">
            <button
              onClick={() => {
                this.props.selectSong(song);
              }}
              className="ui button">
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="ui middle aligned divided list">{this.renderList()}</div>
    );
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  {
    selectSong
  }
)(SongList);
