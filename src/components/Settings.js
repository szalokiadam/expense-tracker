import { useState } from "react";
import Modal from "react-modal";
import "../resources/scss/Settings.scss";
// REDUX
import { connect } from "react-redux";
import { setSettings } from "../actions";

function Settings({ settings, setSettings }) {
  const [_settings, _setSettings] = useState(settings);
  const [open, setOpen] = useState(false);

  function onSave() {
    setSettings({ ...settings, ..._settings });
    setOpen(true);
  }
  function addToSettings(newValue) {
    _setSettings({ ..._settings, ...newValue });
  }

  function MaximumTransaction() {
    return (
      <label>
        <span className="label">Maximum transactions</span>
        <select
          name="max-transaction"
          value={_settings.maxTransactions}
          onChange={(e) =>
            addToSettings({ maxTransactions: Number(e.target.value) })
          }
        >
          {Array.from(Array(51).keys())
            .filter((array) => array > 0 && array % 5 === 0)
            .map((value, key) => {
              return (
                <option key={key} value={value}>
                  {value}
                </option>
              );
            })}
        </select>
      </label>
    );
  }
  const ChangeUserName = () => {
    return (
      <label>
        <span className="label">Change User Name</span>
        <input
          maxLength={60}
          type="text"
          value={_settings?.userName}
          onChange={(e) => addToSettings({ userName: e.target.value })}
        />
      </label>
    );
  };
  return (
    <section className="settings">
      <div className="settings__header">
        <p className="section-title">Settings</p>
        <button type="button" className="primary" onClick={onSave}>
          Save
        </button>
      </div>
      <div className="settings__content">
        {MaximumTransaction()}
        {ChangeUserName()}
      </div>
      <Modal
        isOpen={open}
        ariaHideApp={false}
        overlayClassName="Settings-Modal-Overlay"
        className="Settings-Modal-Content"
      >
        <div>
          <h2>Save completed!</h2>
          <button
            type="button"
            className="primary"
            onClick={() => setOpen(false)}
          >
            Ok
          </button>
        </div>
      </Modal>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    settings: state.settings,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setSettings: (setting) => dispatch(setSettings(setting)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
