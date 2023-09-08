"use client"

import { Modal } from "@/components/ui/modal"
import { useStoreModal } from "@/hooks/use-store-modal"

export const StoreModal = () => {
    const storeModal = useStoreModal();

    return (
        <Modal
            title="Store"
            description="Add a new store"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            Modal for creating a new store form.
        </Modal>
    )
}