import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Collection from "@/Pages/Dashboard/Partials/Collection";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head, Link } from "@inertiajs/react";
import MarketplaceTabs from "@/Layouts/Tabs/MarketplaceTabs";
import Dropdown from "@/Components/Dropdown";


export default function Cart({ auth, cartContents, cartCount, tax, subtotal }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        cart: "",
    });

    var shipping = subtotal / 2;

    return (
        <AuthenticatedLayout auth={auth} cartCount={cartCount}>
            <Head title="Cart" />
            <div className="flex flex-row">
                <table className=" w-1/2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-6">
                    <thead>
                        <th scope="col" className="px-3 py-3 ml-5 text-left">
                            Album
                        </th>
                        <th scope="col" className="px-6 py-3 text-left">
                            Price
                        </th>
                    </thead>
                    {cartContents.map((cartItem) =>
                        <tbody>
                            <tr>
                                <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex flex-row"
                                >
                                    <img
                                        className="rounded-t-lg md:h-full md:w-20 md:rounded-none md:rounded-l-lg mr-5"
                                        src={cartItem.options['imageURL']}
                                        alt=""
                                    />
                                    <p className="mt-4">{cartItem.name}</p>
                                </th>
                                <td className="px-6 py-4">
                                    ${cartItem.price}
                                </td>
                            </tr>
                        </tbody>
                    )}
                </table>
                <table className="w-1/4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-6">
                    <tbody>
                        <tr>
                            <td>
                                Subtotal: ${subtotal.toFixed(2)}
                            </td>
                        </tr>
                        <tr>
                            {parseFloat(subtotal) < 100 && parseFloat(subtotal) > 0 ?
                                <td>
                                    Shipping: ${shipping.toFixed(2)}
                                </td>
                                :
                                <td>
                                    Shipping: $0.00
                                </td>
                            }
                        </tr>
                        <tr>
                            <td>
                                Tax: ${tax.toFixed(2)}
                            </td>
                        </tr>
                        <tr>
                            <hr />
                        </tr>
                        <tr>
                            {parseFloat(subtotal) < 100 && parseFloat(subtotal) > 0 ?
                                <td>Total: $ {(subtotal + shipping + tax).toFixed(2)}</td>
                                :
                                <td>Total: $ {(subtotal + tax).toFixed(2)}</td>
                            }
                        </tr>
                        <tr>
                            <a
                                className="items-center px-2 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${processing && 'opacity-25"
                                href={route('paypal.make.payment')}
                            >
                                Checkout with PayPal
                            </a>
                        </tr>
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout >
    );
}