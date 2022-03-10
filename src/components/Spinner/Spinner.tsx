import * as styles from './SpinnerStyles';

const Spinner = () => (
    <div css={styles.overlay}>
        <div css={styles.spinnerContainer} />
    </div>
);

export default Spinner;
