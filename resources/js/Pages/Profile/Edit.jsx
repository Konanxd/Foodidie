import GuestLayout from '@/Layouts/GuestLayout';
import Footer from '@/Components/Footer';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <GuestLayout>
            <div className="max-w-7xl my-12">
                <div className="space-y-6 mx-28">
                    {/* Profile Information Section */}
                    <div className="bg-white shadow rounded-lg p-6">
                    <h3 className="text-xl font-semibold leading-6 text-gray-900 border-b pb-4">
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
                    <div className="bg-white shadow rounded-lg p-6">
                    <h3 className="text-xl font-semibold leading-6 text-gray-900 border-b pb-4">
                            Upate Password
                        </h3>
                        <div className="mt-4">
                            <UpdatePasswordForm className="mt-4" />
                        </div>
                    </div>

                    {/* Delete Account Section */}
                    <div className="bg-white shadow rounded-lg p-6">
                        <h3 className="text-xl font-semibold leading-6 text-gray-900 border-b pb-4">
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
