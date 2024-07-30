
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getUserProfileAPI } from "../../apis/users/usersAPI";
import StatusMessage from "../Alert/StatusMessage";
const Dashboard = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: 'profile',
    queryFn: getUserProfileAPI
});

console.log({ isError, isLoading, data });

if (isLoading) {
    return <StatusMessage type="loading" message="Loading..." />;
}

 else if (isError) {
    return <StatusMessage type="error" message="An error occurred." />;
}
else{
  return (
    <div className="mx-auto p-4 bg-gray-900 w-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        User Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile Section */}
        <div className="mb-6 bg-white p-4 shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
          <div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Name
              </label>
              <p
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                id="username"
              >
               {data?.user?.username}
              </p>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <p
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                id="email"
              >
                {data?.user?.email}
              </p>
            </div>
          </div>
        </div>

        {/* Credit Usage Section */}
        <div className="mb-6 bg-white p-4 shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Credit Usage</h2>
          <div>
            <p className="mb-4">Monthly Credit: {data?.user?.monthlyRequestCount}</p>
            <p className="mb-4">Credit Used: {data?.user?.apiRequestCount}</p>
            <p className="mb-4">Credit Remaining: {data?.user?.monthlyRequestCount-data?.user?.apiRequestCount}</p>
            <p className="mb-4">Next Billing Date:{data?.user?.trialExpires}</p>
          </div>
        </div>

        {/* Payment and Plans Section */}
        <div className="mb-6 bg-white p-4 shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Payment & Plans</h2>
          <div>
            <p className="mb-4">Current Plan: Trial</p>
            {data?.user?.subscription==="Free" && (
              <p className="border mb-2 rounded w-full py-2 px-3 text-gray-700 leading-tight">
                Free:5 monthly request
              </p>
            )}
             {data?.user?.subscription==="Free" && (
              <p className="border mb-2 rounded w-full py-2 px-3 text-gray-700 leading-tight">
                Basic:5= monthly request
              </p>
            )}
             {data?.user?.subscription==="Free" && (
              <p className="border mb-2 rounded w-full py-2 px-3 text-gray-700 leading-tight">
                Premium:500 monthly request
              </p>
            )}
            
              
    
            <Link
              to="/plans"
              className=" py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Upgrade Plan
            </Link>
          </div>
        </div>

        {/* Trial Information Section */}
        <div className="mb-6 bg-white p-4 shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Trial Information</h2>
          <div>
            <p className="mb-4">Trial Status: {data?.user?.trialActive}</p>
            <p className="mb-4">Expires on:{data?.user?.trialExpires}</p>
            <Link
              to="/plans"
              className=" py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Upgrade to Premium
            </Link>
          </div>
        </div>

        {/* History Section */}
        <div className="mb-6 bg-white p-4 shadow rounded-lg col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-5">
            Payment History
          </h2>
          {data?.user?.payments?.length>0 ? <ul className="divide-y divide-gray-200">
            {/* Example History Item */}
            <li className="py-4 hover:bg-gray-50 transition duration-150 ease-in-out">
              <div className="flex flex-col sm:flex-row justify-between">
                <div className="mb-2 sm:mb-0">
                  <p className="text-sm font-medium text-indigo-600">
                    Example Plan
                  </p>
                  <p className="text-xs text-gray-500">Example Date</p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm font-semibold text-green-500">
                    Example Status
                  </p>
                  <p className="text-sm text-gray-700 ml-4">$Example Amount</p>
                </div>
              </div>
            </li>
          </ul>:<h1>No Payments</h1>}
        </div>
      </div>
    </div>
  );
}
  
};

export default Dashboard;