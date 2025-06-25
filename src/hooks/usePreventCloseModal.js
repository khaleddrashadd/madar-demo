export function usePreventCloseModal() {
  const handleInteractOutside = (e) => {
    e.preventDefault();
  };

  const handleEscapeKeyDown = (e) => {
    e.preventDefault();
  };

  return {
    onInteractOutside: handleInteractOutside,
    onEscapeKeyDown: handleEscapeKeyDown,
  };
}
