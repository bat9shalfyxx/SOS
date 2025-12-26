const Requirements = () => {
    return (
            <section className="main requirements" id="reqs">
                <div className="reqs-title">
                    <h3>Can My Computer Run this game?</h3>
                    <h1>system requirements</h1>
                </div>
                <div className="reqs-table">
                    <table>
                        <tr>
                            <td className="reqs-el">
                                <h2>OS:</h2>
                                <p>Windows 7 64-bit only (No OSX suppotrat this time)</p>
                            </td>
                            <td className="reqs-el">
                                <h2>ROCESSOR:</h2>
                                <p>Intel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2 @ 2.8 GHZ</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="reqs-el">
                                <h2>mEMORY:</h2>
                                <p>8 GB RAM</p>
                            </td>
                            <td className="reqs-el">
                                <h2>storage:</h2>
                                <p>8 GB available space</p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="reqs-el">
                                <h2>GRAPHICS:</h2>
                                <p>NVIDIA GeForce GTX 660 2GB or AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)</p>
                            </td>
                        </tr>
                    </table>
                </div>
            </section>
    )
}

export default Requirements;