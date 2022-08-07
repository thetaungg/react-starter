import * as styles from './FullscreenSpinnerStyles';

const FullscreenSpinner = () => (
    <div css={styles.overlay}>
        <div css={styles.spinnerContainer} />
    </div>
);

export default FullscreenSpinner;
