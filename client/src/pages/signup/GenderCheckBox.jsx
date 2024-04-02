import PropTypes from 'prop-types'

export const GenderCheckBox = ({ genderChange, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === 'male' ? 'selected' : ''
          }`}>
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === 'male'}
            onChange={() => genderChange('male')}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === 'male' ? 'selected' : ''
          }`}>
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === 'female'}
            onChange={() => genderChange('female')}
          />
        </label>
      </div>
    </div>
  )
}

GenderCheckBox.propTypes = {
  genderChange: PropTypes.func.isRequired,
  selectedGender: PropTypes.string.isRequired,
}
