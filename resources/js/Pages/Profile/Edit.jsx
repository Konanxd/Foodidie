import Footer from '@/Components/Footer';
import GuestLayout from '@/Layouts/GuestLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <GuestLayout>
            <div className="my-12 max-w-7xl">
                <div className="mx-28 space-y-6">
                    {/* Profile Information Section */}
                    <div className="rounded-lg bg-white p-6 shadow">
                        <h3 className="border-b pb-4 text-xl font-semibold leading-6 text-gray-900">
                            Profile Information
                        </h3>
                        <div className="mt-4">
                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                className="mt-4"
                            />
                        </div>
                    </div>

                    {/* Update Password Section */}
                    <div className="rounded-lg bg-white p-6 shadow">
                        <h3 className="border-b pb-4 text-xl font-semibold leading-6 text-gray-900">
                            Update Password
                        </h3>
                        <div className="mt-4">
                            <UpdatePasswordForm className="mt-4" />
                        </div>
                    </div>

                    {/* Delete Account Section */}
                    <div className="rounded-lg bg-white p-6 shadow">
                        <h3 className="border-b pb-4 text-xl font-semibold leading-6 text-gray-900">
                            Delete Account
                        </h3>
                        <div className="mt-4">
                            <DeleteUserForm className="mt-4" />
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <Footer />
            </section>
        </GuestLayout>
    );
}
