export default function ConfirmSignoutModal({ onConfirm, onCancel }) {
  return (
    <>
      <dialog open={showModal}>
        <h2>Logout Confirmation</h2>

        <form method="dialog">
          <button type="submit" value="cancel" onClick={onConfirm}>
            Logout
          </button>
          <button type="submit" value="logout" onClick={onCancel}>
            Cancel
          </button>
        </form>
      </dialog>
    </>
  );
}
