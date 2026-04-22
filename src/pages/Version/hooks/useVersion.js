import useGlobal from "@/api/useGlobal";
import {useEffect, useState} from "react";

export default function useVersion() {
	const {getVersiones} = useGlobal();
	const [versiones, setVersiones] = useState([]);
	const [loading, setLoading] = useState(true);

	async function fetchVersiones() {
		setLoading(true);
		const data = await getVersiones();
		if (data) {
			setVersiones(data);
		}
		setLoading(false);
	}

	useEffect(() => {
		fetchVersiones();
	}, []);

	return {versiones, loading};
}
