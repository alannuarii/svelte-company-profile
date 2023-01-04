export const load = ({ fetch, params }) => {
	const fetchData = async (unit) => {
		const res = await fetch(`http://127.0.0.1:5000/${unit}`);
		const result = await res.json();
		return result;
	};

	return {
		data: fetchData(params.unit)
	};
};
